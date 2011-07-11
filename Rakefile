require 'rubygems'
require 'closure-compiler'

task :default do
  js = File.open('dom.js', 'r')
  min = Closure::Compiler.new.compile(js)
  File.open('dom-min.js', 'w') {|f| f.write(min) }
end