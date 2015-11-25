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
}", "javascript", "Paul Irish"],
["require 'hirb'
module Hirb::Helpers::Table::Filters
  def to_milliseconds(seconds)
    '%.3f ms' % (seconds * 1000)
  end
end", "ruby", "change"],
["def wrap_methods_with_profiling
      profiler = self

      [
        { object: @obj.singleton_class, methods: @obj.methods(false), private: false, singleton: true },
        { object: @obj, methods: @obj.instance_methods(false), private: false },
        { object: @obj, methods: @obj.private_instance_methods(false), private: true }
      ].each do |group|
        group[:object].module_eval do
          group[:methods].each do |method|
            define_method('{method}_with_profiling') do |*args, &block|
              profiler.send(:profile, method, singleton: group[:singleton]) do
                send('# {method}_without_profiling', *args, &block)
              end
            end

            alias_method '# {method}_without_profiling', method
            alias_method method, '# {method}_with_profiling'

            private '# {method}_with_profiling' if group[:private]
          end
        end
      end
    end", "ruby", "change"],
    ["var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}

var arr = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];",
"javascript", "anon"],
["ModelCore.prototype = {
            $uuid : null,
            $pkField : null,
            $settings : {},
            $mapping : {},
            $hasMany : {},
            $hasOne : {},
            $dataset : [],
            $scope : null,
  }", "javascript", "anon"]
]

code_list.each do |script, lang, author|
  Code.create( script: script, lang: lang, author: author )
end
