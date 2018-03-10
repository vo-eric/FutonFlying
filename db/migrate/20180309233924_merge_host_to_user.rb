class MergeHostToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :lat, :float, null: false
    add_column :users, :lng, :float, null: false
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :accepting_guests, :boolean, default: true

    drop_table :hosts
  end
end
