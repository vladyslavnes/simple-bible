import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import TRANSLATIONS from '../../assets/data/translations.js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  translations = []
  currentTranslation: any
  currentBook: any
  currentChapter: any
  nightMode = false

  constructor(public navCtrl: NavController) {
    for (let translationName in TRANSLATIONS) {
      const t = { books: [...TRANSLATIONS[translationName]], name: translationName }
      this.translations[translationName] = t
    }

    this.currentTranslation = 'kjv'
    this.currentBook = 'Genesis'
    this.currentChapter = 0
  }



  public getTranslations() {
    console.log(this.translations)
    return Object.keys(this.translations)
  }

  public getChapters(bookName) {
    const allBooks = this.translations[this.currentTranslation].books
    for (let i = 0; i < allBooks.length; i++) {
      if (allBooks[i].name === bookName) {
        return allBooks[i].chapters
      }
    }
    return null
  }

  public getChapter(bookName, chapterNum) {
    return this.getChapters(bookName)[chapterNum]
  }

  public chaptersNumbers(bookName) {
    let populatedNumbers = []
    for (let i = 0; i < this.getChapters(bookName).length; i++) {
      populatedNumbers.push(i)
    }
    return populatedNumbers
  }

  public switchNightMode() {
    this.nightMode = !this.nightMode
  }
}
