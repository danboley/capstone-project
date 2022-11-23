class User < ApplicationRecord
  has_many :activities
  has_many :comments, through: :activities

#   has_many :follows

  has_many :follower_relationships, foreign_key: :following_id, class_name: 'Follow'
  has_many :followers, through: :follower_relationships, source: :follower

  has_many :following_relationships, foreign_key: :follower_id, class_name: 'Follow'
  has_many :following, through: :following_relationships, source: :following

  validates :email, uniqueness: true, presence: true
#   validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  has_secure_password
end
