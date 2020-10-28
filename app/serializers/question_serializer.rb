class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :deck_id, :correct, :incorrect, :question
end
