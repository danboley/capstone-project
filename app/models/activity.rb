class Activity < ApplicationRecord
  belongs_to :user
  has_many :comments

  # def date
  #   read_attribute(:date).strftime("%D/%M/%Y")
  # end

  def time
    read_attribute(:time).strftime('%H:%M:%S')
  end

  def duration
    read_attribute(:duration).strftime('%Hh %Mm %Ss')
  end
end