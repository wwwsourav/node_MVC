const express = require('express');

exports.home=(req,res)=>{
    res.render('home');
}

exports.about=(req,res)=>{
    res.render('about');
}

exports.contact=(req,res)=>{
    res.render('contact');
}

exports.post=(req,res)=>{
    res.render('post');
}
