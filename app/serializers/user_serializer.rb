class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :score
end
