require 'rubygems'
require 'closure-compiler'

task :default do
  js = File.open('dollar.js', 'r')
  min = Closure::Compiler.new.compile(js)
  File.open('dom-min.js', 'w') {|f| f.write(min) }
end