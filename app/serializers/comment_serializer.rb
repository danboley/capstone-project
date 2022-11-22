class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :activity
  has_one :user
end
