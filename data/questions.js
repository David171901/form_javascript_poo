import {Question} from '../models/Question.js'
import {data} from '../data/data.js'

export const questions = data.map(e => new Question(e.question,e.choises,e.answer))

