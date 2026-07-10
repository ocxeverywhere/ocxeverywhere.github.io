# frozen_string_literal: true

module OcxEverywhere
  class PostMetadataValidator < Jekyll::Generator
    safe true
    priority :highest

    REQUIRED = %w[title description date lang categories tags permalink author].freeze
    LANGUAGES = %w[en ko].freeze

    def generate(site)
      site.posts.docs.each do |post|
        missing = REQUIRED.reject { |key| post.data.key?(key) && !post.data[key].to_s.empty? }
        raise Jekyll::Errors::FatalException, "#{post.relative_path}: missing #{missing.join(', ')}" unless missing.empty?
        next if LANGUAGES.include?(post.data['lang'])

        raise Jekyll::Errors::FatalException, "#{post.relative_path}: lang must be en or ko"
      end
    end
  end
end

