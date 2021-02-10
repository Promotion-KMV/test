"use strict"
let numberOfFilms = +prompt("Сколько фильмов вы посмотрели", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let watchFilm = prompt("Один из просмотренных фильмов", ""),
    countFilm = prompt("Оценка фильма", ""),
    watchFilms = prompt("Один из просмотренных фильмов", ""),
    countFilms = prompt("Оценка фильма", "");
personalMovieDB.movies[watchFilm] = countFilm;
personalMovieDB.movies[watchFilms] = countFilms;
console.log(personalMovieDB.movies)