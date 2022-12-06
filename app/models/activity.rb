class Activity < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates_presence_of :title, :date, :time, :distance, :duration, :sport, :elevation, :location

  # def date
  #   read_attribute(:date).strftime("%D/%M/%Y")
  # end

  # def time
  #   read_attribute(:time).strftime('%H:%M:%S')
  # end

  def duration
    read_attribute(:duration).strftime('%Hh %Mm %Ss')
  end
end
