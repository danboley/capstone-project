class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :title
      t.date :date
      t.time :time
      t.float :distance
      t.time :duration
      t.string :sport
      t.integer :elevation
      t.text :description
      t.string :location
      t.text :map
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
