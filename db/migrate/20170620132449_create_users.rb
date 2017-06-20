class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
    t.string :fname, null: false
    t.string :lname, null: false
    t.string :username, null: false
    t.string :password_digest, null: false
    t.string :session_token, null: false
    t.text :bio
    t.string :city_id, null: false

    t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :city_id, unique: true
  end
end
