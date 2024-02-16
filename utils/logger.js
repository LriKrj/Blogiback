const info = (...params) => {
    console.log(...params)
  }
  
  const error = (...params) => {
    console.error(...params)
  }

  const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
      
    } else if (error.name ===  'JsonWebTokenError') {
      return response.status(400).json({ error: 'token missing or invalid' })
    }
   else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token has expired'
    })
  }
  
    next(error)
  }
  
  module.exports = {
    info, error
  }