class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.float :lng, null: false
      t.float :lat, null: false
      t.integer :owner_id, null: false
      t.boolean :accepting_guests, null: false
      t.string :description
    end
  end
end
