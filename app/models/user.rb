class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    has_many :user_decks
    has_many :decks, through: :user_decks
end
