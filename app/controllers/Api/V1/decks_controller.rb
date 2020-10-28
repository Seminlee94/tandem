class Api::V1::DecksController < ApplicationController

    def index
        decks = Deck.all
        render json: decks
    end

    def show
        deck = Deck.find(params[:id])
        render json: deck
    end

    def create
        deck = Deck.create(deck_params)
        render json: deck
    end
  
    def update
        deck = Deck.find(params[:id])
        deck.update(deck_params)
        render json: deck
    end

    def delete
        deck = Deck.find(params[:id])

        render json: {}
    end
    
    private
    
    def deck_params
        params.require(:deck).permit(:title)
    end
end
