class UserDeckSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :deck_id, :answered, :unanswered

  def initialize(user_deck_obj)
    @user_deck_obj = user_deck_obj
  end

  def to_serialized_json
    @user_deck_obj.to_json(
        :include => {
          :user => {
              :except => [:created_at, :updated_at, :password_digest]
          },
          :deck => {
            :include => [:questions]
            # :except => [:created_at, :updated_at]
          }
        }
    )
  end
end
