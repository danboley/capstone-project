class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :first_name, :last_name, :pro_pic, :location, :subscriber
  has_many :activities
  has_many :comments, through: :activities
end
