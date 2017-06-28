class AddColumnsToHosts < ActiveRecord::Migration[5.0]
  def change
    add_column :hosts, :fname, :string, null: false
    add_column :hosts, :lname, :string, null: false
    add_column :hosts, :city, :string
    add_column :hosts, :location, :string
  end
end
