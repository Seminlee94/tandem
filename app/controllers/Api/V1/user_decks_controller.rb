class Api::V1::UserDecksController < ApplicationController
    def index
        user_decks = UserDeck.all
        render json: UserDeckSerializer.new(user_decks).to_serialized_json
    end
    
    def show
        user_deck = UserDeck.find(params[:id])
        render json: UserDeckSerializer.new(user_deck).to_serialized_json
    end
    
    def create
        user_deck = UserDeck.create(user_deck_params)
        render json: UserDeckSerializer.new(user_deck).to_serialized_json
    end

    def update
        user_deck = UserDeck.find(params[:id])
        user_deck.update(user_deck_params)
        render json: UserDeckSerializer.new(user_deck).to_serialized_json
    end
    
    def destroy
        user_deck = UserDeck.find(params[:id])
        user_deck.destroy
    
        render json: {}
    end
    
    private
    
    def user_deck_params
        params.require(:user_deck).permit(:user_id, :deck_id, :answered, :correct)
    end
end
