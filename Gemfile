# frozen_string_literal: true

source "https://rubygems.org"
gem "jekyll", "~> 4.1"
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15.0"
  gem "jekyll-postcss-v2"
  # gem "jekyll-minifier"  # Disabled - using terser/cssnano for better ES6+ support
end
gem "rouge"

# 以下两个在旧版 Ruby 里是默认 gem，新版起必须显式声明，否则 jekyll 起不来：
#   webrick —— Ruby 3.0 移出
#   logger  —— Ruby 3.5 / 4.0 移出（缺了会报 `cannot load such file -- logger`）
gem "webrick", "~> 1.7"
gem "logger"
