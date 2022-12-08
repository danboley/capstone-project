class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :distance, :duration, :sport, :elevation, :description, :location, :map, :image
  has_one :user
  has_many :comments
end
