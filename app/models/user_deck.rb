require 'pry'
require 'json'
require "rest-client"
require "httparty"

class UserDeck < ApplicationRecord
    belongs_to :user
    belongs_to :deck
    
    
    def self.get_questions
        response = HTTParty.get("http://localhost:3000/api/v1/decks/1")
        result = JSON.parse(response.body)
        question_id = result["questions"].map{|q| q["id"]}

        userDeck = UserDeck.create!(
            user_id:User.first.id,
            deck_id:Deck.first.id,
            answered:[],
            unanswered:[question_id]
        )
        # binding.pry
    end
end