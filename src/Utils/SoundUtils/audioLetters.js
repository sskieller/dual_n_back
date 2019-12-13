import a from '../../Sounds/a.mp3'
import b from '../../Sounds/b.mp3'
import c from '../../Sounds/c.mp3'
import d from '../../Sounds/d.mp3'
import e from '../../Sounds/e.mp3'
import f from '../../Sounds/f.mp3'
import g from '../../Sounds/g.mp3'
import h from '../../Sounds/h.mp3'
import i from '../../Sounds/i.mp3'
import j from '../../Sounds/j.mp3'
import k from '../../Sounds/k.mp3'
import l from '../../Sounds/l.mp3'
import m from '../../Sounds/m.mp3'
import n from '../../Sounds/n.mp3'
import o from '../../Sounds/o.mp3'
import p from '../../Sounds/p.mp3'
import q from '../../Sounds/q.mp3'
import r from '../../Sounds/r.mp3'
import s from '../../Sounds/s.mp3'
import t from '../../Sounds/t.mp3'
import u from '../../Sounds/u.mp3'
import v from '../../Sounds/v.mp3'
import w from '../../Sounds/w.mp3'
import x from '../../Sounds/x.mp3'
import y from '../../Sounds/y.mp3'
import z from '../../Sounds/z.mp3'

const audios = {
    'a': new Audio(a),
    'b': new Audio(b),
    'c': new Audio(c),
    'd': new Audio(d),
    'e': new Audio(e),
    'f': new Audio(f),
    'g': new Audio(g),
    'h': new Audio(h),
    'i': new Audio(i),
    'j': new Audio(j),
    'k': new Audio(k),
    'l': new Audio(l),
    'm': new Audio(m),
    'n': new Audio(n),
    'o': new Audio(o),
    'p': new Audio(p),
    'q': new Audio(q),
    'r': new Audio(r),
    's': new Audio(s),
    't': new Audio(t),
    'u': new Audio(u),
    'v': new Audio(v),
    'w': new Audio(w),
    'x': new Audio(x),
    'y': new Audio(y),
    'z': new Audio(z)

};


let currentLetter = null;

const play = (name) => {
    if (currentLetter) {
        audios[currentLetter].pause();
    }
    audios[name].play();
    currentLetter = name;
};

const pause = (name) => {
    currentLetter = null;
    audios[name].pause();
};

// I den simple funktion skrev jeg ikke pause

// const play = () => {

//     // her skal skrives funktion for tilfældigt valg af lyd
//     audios.a.play();
// };


export default {
    pause,
    play
};