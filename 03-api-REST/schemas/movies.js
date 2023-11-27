const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required.'
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).optional(),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western', 'Sci-Fi', 'Crime']),
    {
      invalid_type_error: 'Movie genre must be an array of enum Genre',
      required_error: 'Movie genre is required.'
    }
  )
})

function validateMovie (object) {
  return movieSchema.safeParse(object) // El safeParse me dice si hay un error o hay datos, para arreglar con un if
}

module.exports = {
  validateMovie
}
