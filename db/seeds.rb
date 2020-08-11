# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
{
    username: "bob",
    email: "bob@bob.com",
    password: "booboob"
}
]

posts = [ 
{
    user_id: 1,
    subject: "blah",
    content: "blah blah blah", 
    img_url: "",
    bittersweet: "bitter"
}, 
{
    user_id: 1,
    subject: "bloop",
    content: "bloop bloop bloop", 
    img_url: "",
    bittersweet: "bitter"
},
{
    user_id: 1,
    subject: "bleep",
    content: "blah blah blah", 
    img_url: "",
    bittersweet: "bitter"
}
]

comments = [ {
    content: "ba pa ra pa bababa ra rababa ramm",
    post_id: 1,
    user_id: 1
}
]

User.create(users)
Post.create(posts)
Comment.create(comments)