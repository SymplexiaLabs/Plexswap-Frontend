import Ajv from 'ajv'
import schema from './../schema/plexswap.json'

export const tokenListValidator = new Ajv({ allErrors: true }).compile(schema)
