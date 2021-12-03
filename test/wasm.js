import ava from 'ava'
import { genIsBlocked } from './_util/index.js'

const isBlocked = genIsBlocked({runtime: 'simplewasm-confine-runtime'})

function allow (program) {
  ava(`${program} allowed`, isBlocked, program, false)
}

function deny (program) {
  ava(`${program} denied`, isBlocked, program, true)
}

allow('fizzbuzz.wasm')