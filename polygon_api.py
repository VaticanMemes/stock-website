import sys
from polygon import RESTClient

input = sys.argv[1]
client = RESTClient(api_key="wgOwUik_ijPDrNSCYdgpwnNMy59pFJ99")
ticker = input
output = client.get_previous_close_agg(ticker=ticker)[0].close
print(output)
sys.stdout.flush()