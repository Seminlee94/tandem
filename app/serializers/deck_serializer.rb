class DeckSerializer < ActiveModel::Serializer
  attributes :id, :title, :questions
end
