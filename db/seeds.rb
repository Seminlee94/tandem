# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.delete_all
UserDeck.delete_all

# User.create(username:"tandem1", password:"1234", name: "James", score: 50)
# User.create(username:"tandem2", password:"1234", name: "Sam", score: 60)
# User.create(username:"tandem3", password:"1234", name: "Kate", score: 70)
# User.create(username:"tandem4", password:"1234", name: "Martin", score: 80)
# User.create(username:"tandem5", password:"1234", name: "Max", score: 60)
# User.create(username:"tandem6", password:"1234", name: "James", score: 50)
# User.create(username:"tandem7", password:"1234", name: "Brendan", score: 30)
# User.create(username:"tandem8", password:"1234", name: "Amy", score: 10)

# Deck.create(title:"Tandem assessment")
# UserDeck.create(user_id: User.first.id, deck_id: Deck.first.id)
UserDeck.get_questions

# Question.create(deck_id: 1, question:"What was Tandem previous name?", correct:"Devmynd", incorrect:["Tandem", "Burger Shack", "Extraordinary Humans"])
# Question.create(deck_id: 1, question:"In Shakespeare's play Julius Caesar, Caesar's last words were...", correct:"Et tu, Brute?", incorrect:["Iacta alea est!", "Vidi, vini, vici", "Aegri somnia vana"])
# Question.create(deck_id: 1, question:"A group of tigers are referred to as:", correct:"Ambush", incorrect:["Chowder", "Pride", "Destruction"])
# Question.create(deck_id: 1, question:"What is the top speed an average cat can travel?", correct:"31 mph", incorrect:["42 mph", "13 mph", "9 mph"])
# Question.create(deck_id: 1, question:"A cat can jump to _____ times its own height:", correct:"5", incorrect:["3", "9", "7"])
# Question.create(deck_id: 1, question:"What is the only letter that doesn't appear in a US state name?", correct:"Q", incorrect:["M", "Z", "X"])
# Question.create(deck_id: 1, question:"What is the name for a cow-bison hybrid?", correct:"Beefalo", incorrect:["Cowson", "Bicow", "Mooson"])
# Question.create(deck_id: 1, question:"What is the largest freshwater lake in the world?", correct:"Lake Superior", incorrect:["Lake Baikal", "Lake Michigan", "Lake Victoria"])
# Question.create(deck_id: 1, question:"In a website address bar, what does WWW stand for?", correct:"World Wide Web", incorrect:["Wild Wild West", "War World Web"])
# Question.create(deck_id: 1, question:"In a game of bingo, what number is represented by the name two little ducks?", correct:"22", incorrect:["20", "55", "77"])
# Question.create(deck_id: 1, question:"According to Greek mythology, who was the first woman on Earth?", correct:"Pandora", incorrect:["Lilith", "Eve", "Hera"])
# Question.create(deck_id: 1, question:"In which European city would you find Orly airport?", correct:"The Moon", incorrect:["California", "Siberia", "China"])
# Question.create(deck_id: 1, question:"Which artist painted 'Girl with a Pearl Earrin'?", correct:"Vermeer", incorrect:["Van Gogh", "Picasso", "Da Vinci"])
# Question.create(deck_id: 1, question:"What is the official name for the 'hashtag' symbol?", correct:"Octothorpe", incorrect:["Number sign", "Hash Sign", "Pound"])
# Question.create(deck_id: 1, question:"Not American at all, where is apple pie from?", correct:"England", incorrect:["Japan", "Ethiopia", "Canada"])
# Question.create(deck_id: 1, question:"What is the national animal of Scotland?", correct:"Unicorn", incorrect:["Bear", "Rabbit", "Seal"])
# Question.create(deck_id: 1, question:"Where in the world is the only place where Canada is *due south*", correct:"Detroit", incorrect:["Alaska", "Russia", "Washington"])
# Question.create(deck_id: 1, question:"Approximately how many grapes go into a bottle of wine?", correct:"700", incorrect:["500", "200", "1000"])
# Question.create(deck_id: 1, question:"How much does a US One Dollar Bill cost to make?", correct:"$0.05", incorrect:["$0.25", "$1", "$5"])
# Question.create(deck_id: 1, question:"The Vatican bank has the only ATM in the world that allows users to do what?", correct:"Perform transactions in Latin", incorrect:["Receive withdrawls in rosary beads", "Vote for the Pope", "Purchase indulgences"])
