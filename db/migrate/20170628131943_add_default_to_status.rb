class AddDefaultToStatus < ActiveRecord::Migration[5.0]
  def change
    add_column :hosts, :accepting_gusts, :boolean, :default => true
  end
end
