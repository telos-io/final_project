# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

code_list = [
  ["#!/usr/bin/env ruby
COMPONENT_ROOT = File.expand_path(''../../'', __FILE__)
require File.expand_path(''../tools/test', COMPONENT_ROOT)
exit Minitest.run(ARGV)", "ruby", "Rails Team"],
["for (var i = 1; i <= 100; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? 'FizzBuzz' : 'Fizz' : b ? 'Buzz' : i);
}", "javascript", "Paul Irish"]
]

code_list.each do |script, lang, author|
  Code.create( script: script, lang: lang, author: author )
end
