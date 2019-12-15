import React from 'react';
import audioLetters from './audioLetters';


export default class PlayLetters {

    randSound () {
        var selectedNumber = Math.floor(Math.random() * 26) +1;

        audioLetters.play(this.alphabet[selectedNumber]);
    }

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');



}
