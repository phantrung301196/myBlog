'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    getAllPosts: (req, res) => {
        let sql = 'SELECT * FROM post_tbl';
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    getPost: (req, res) => {
        let sql = `SELECT * FROM (
                   SELECT (@row_number:=@row_number + 1) AS num, post.*, user.userName FROM post_tbl post JOIN user_tbl USER 
                   ON post.owner = user.id AND post.isDeleted = 0 AND user.isDeleted = 0 JOIN (SELECT @row_number := 0) r) tbl WHERE tbl.num >= ? AND tbl.num < ?`;
        db.query(sql, [req.params.segment, req.params.offset], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    getPostDetail: (req, res) => {
        let sql = `SELECT post.id, post.title, post.content, DATE_FORMAT(post.modifiedDate, "%M %d %Y") as modifiedDate
                    , DATE_FORMAT(post.createdDate, "%M %d %Y") as createdDate, user.userName as owner FROM post_tbl post 
                    JOIN user_tbl USER  ON post.owner = user.id AND post.isDeleted = 0 AND user.isDeleted = 0 
                    WHERE post.id = ?`;
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    savePost: (req, res) => {
        let sql = `insert into post_tbl (title, content, owner) 
                    values (?,?,?)`;
        let data = [req.body.title, req.body.content, 1];
        console.log(data);
        db.query(sql, data, (err, response) => {
            if (err) throw err;
            res.json({ message: 'Insert success', id: response.insertId });
        })
    }
}