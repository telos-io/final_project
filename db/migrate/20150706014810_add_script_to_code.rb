class AddScriptToCode < ActiveRecord::Migration
  def change
    add_column :codes, :script, :text
  end
end
