class Api::V1::QuestionsController < ApplicationController
    def index
        questions = Question.all
        render json: questions
    end

    def show
        question = Question.find(params[:id])
        render json: question
        # render json: QuestionSerializer.new(question).to_serialized_json
    end

    def create
        question = Question.create(question_params)
        render json: question
    end
  
    def update
        question = Question.find(params[:id])
        question.update(question_params)
        render json: question
    end

    def delete
        question = Question.find(params[:id])

        render json: {}
    end
    
    private
    
    def question_params
        params.require(:question).permit(:question, :incorrect, :correct, :deck_id, :answered, :is_correct)
    end
end
