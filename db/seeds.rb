# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all


users = [
{
    username: "bob-anonymous",
    email: "bob@bob.com",
    password: "bobbob"
}, 
{
    username: "nora",
    email: "nora@nora.com",
    password: "noranora"
},
{
    username: "bill-anonymous",
    email: "bill@bill.com",
    password: "billbill"
}
]

@users = User.create(users)

posts = [ 
{
    user_id: @users[0].id,
    subject: "blah",
    content: "blah blah blah", 
    img_url: "https://res.cloudinary.com/alienora/image/upload/v1597242764/pexels-alex-fu-1497148_kk7fhi.jpg",
    bittersweet: "bitter"
}, 
{
    user_id: @users[0].id,
    subject: "bloop",
    content: "bloop bloop bloop", 
    img_url: "https://res.cloudinary.com/alienora/image/upload/v1597242764/pexels-karolina-grabowska-4464377_r1f6kg.jpg",
    bittersweet: "bitter"
},
{
    user_id: @users[0].id,
    subject: "bleep",
    content: "blah blah blah", 
    img_url: "https://res.cloudinary.com/alienora/image/upload/v1597242765/pexels-olya-kobruseva-4679168_r2ej8f.jpg",
    bittersweet: "bitter"
}
]


@posts = Post.create(posts)

comments = [ {
    content: "ba pa ra pa bababa ra rababa ramm",
    post_id: @posts[0].id,
    user_id: @users[0].id
}
]



Comment.create(comments)