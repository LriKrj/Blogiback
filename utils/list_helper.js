const dummy = (blogs) => {
    return 1
  }
const totalLikes = (blogs) => {
     
  const likesSum = blogs.reduce((sum, blog) => sum+blog.likes,0)
   

  return likesSum
}
  module.exports = {
    dummy,
    totalLikes
  }