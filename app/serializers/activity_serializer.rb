class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :distance, :duration, :sport, :elevation, :description, :location, :map
  has_one :user
end
