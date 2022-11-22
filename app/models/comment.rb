class Comment < ApplicationRecord
  belongs_to :activity
  has_one :user, through: :activity
end
