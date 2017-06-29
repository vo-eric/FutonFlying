class AddAndRemoveColumnsFromHosts < ActiveRecord::Migration[5.0]
  def change
    remove_column :hosts, :owner_id
    remove_column :hosts, :accepting_gusts
    remove_column :hosts, :accepting_guests
    add_column :hosts, :accepting_guests, :boolean, :default => true
    rename_column :hosts, :location, :country
  end
end
