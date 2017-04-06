var grr = `<GoodreadsResponse>
<Request>
<authentication>true</authentication>
<key>
<![CDATA[ mN1DyVoFS4cfbCMh5HmnpA ]]>
</key>
<method>
<![CDATA[ book_show ]]>
</method>
</Request>
<book>
<id>656</id>
<title>War and Peace</title>
<isbn>
<![CDATA[ 0192833987 ]]>
</isbn>
<isbn13>
<![CDATA[ 9780192833983 ]]>
</isbn13>
<asin>
<![CDATA[ ]]>
</asin>
<kindle_asin>
<![CDATA[ B005X3S9J8 ]]>
</kindle_asin>
<marketplace_id>
<![CDATA[ ATVPDKIKX0DER ]]>
</marketplace_id>
<country_code>
<![CDATA[ US ]]>
</country_code>
<image_url>
http://images.gr-assets.com/books/1413215930m/656.jpg
</image_url>
<small_image_url>
http://images.gr-assets.com/books/1413215930s/656.jpg
</small_image_url>
<publication_year>1998</publication_year>
<publication_month>6</publication_month>
<publication_day>25</publication_day>
<publisher>Oxford University Press</publisher>
<language_code>eng</language_code>
<is_ebook>false</is_ebook>
<description>
<![CDATA[
Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed. <br /><br />The prodigious cast of characters, seem to act and move as if connected by threads of destiny as the novel relentlessly questions ideas of free will, fate, and providence. Yet Tolstoy's portrayal of marital relations and scenes of domesticity is as truthful and poignant as the grand themes that underlie them.
]]>
</description>
<work>
<id type="integer">4912783</id>
<books_count type="integer">924</books_count>
<best_book_id type="integer">656</best_book_id>
<reviews_count type="integer">466398</reviews_count>
<ratings_sum type="integer">732248</ratings_sum>
<ratings_count type="integer">178599</ratings_count>
<text_reviews_count type="integer">7481</text_reviews_count>
<original_publication_year type="integer">1865</original_publication_year>
<original_publication_month type="integer" nil="true"/>
<original_publication_day type="integer" nil="true"/>
<original_title>Война и миръ</original_title>
<original_language_id type="integer" nil="true"/>
<media_type>book</media_type>
<rating_dist>5:79433|4:55748|3:29805|2:9063|1:4550|total:178599</rating_dist>
<desc_user_id type="integer">40511334</desc_user_id>
<default_chaptering_book_id type="integer" nil="true"/>
<default_description_language_code nil="true"/>
</work>
<average_rating>4.10</average_rating>
<num_pages>
<![CDATA[ 1392 ]]>
</num_pages>
<format>
<![CDATA[ Paperback ]]>
</format>
<edition_information>
<![CDATA[ Oxford World's Classics ]]>
</edition_information>
<ratings_count>
<![CDATA[ 155950 ]]>
</ratings_count>
<text_reviews_count>
<![CDATA[ 4652 ]]>
</text_reviews_count>

</book>
</GoodreadsResponse>`
var PassThrough = require('stream').PassThrough;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var sinon = require('sinon');
var http = require('http');


var goodreadsService = require('../../services/goodreadsService')();



chai.use(chaiAsPromised);
chai.should();

describe('GoodReadsService', function () {
    beforeEach(function stubHttp() {
      //  this.request = sinon.stub(http, 'request');
    });

    it.only('should get a book', function(done){
        // var response = new PassThrough();
        // response.write(grr);
        // response.end();

        // var request = new PassThrough();

        // this.request.callsArgWith(1, response).returns(request);
        goodreadsService.showBook(2,function(book){
            console.log(book);
            book.title.should.equal('War and Peace');
           // console.log(http.request.args[0][0].path);
            done();
        })
    })
    afterEach(function stubHttp() {
      //  http.request.restore();
    });


});

