class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :pro_pic
      t.string :location
      t.boolean :subscriber

      t.timestamps
    end
  end
end
