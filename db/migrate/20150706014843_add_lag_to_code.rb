class AddLagToCode < ActiveRecord::Migration
  def change
    add_column :codes, :lang, :string
  end
end
