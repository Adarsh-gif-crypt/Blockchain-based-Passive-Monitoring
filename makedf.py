import sys
import json
import pandas as pd

filepath = 'local-storage/data.csv'
df = pd.read_csv(filepath)

# def json_func(jsonfile):
#     y = json.loads(jsonfile)
#     return y


def extract_filters(data_dict):
    #filters = json_func(data_dict)
    filters = [i for i in data_dict if data_dict[i]=='on']
    filters = list(filters)
    filters.append('time')
    return filters

def make_df(filter_dict):
    #filter_list = json_func()
    filter_list = extract_filters(filter_dict)
    new_df = df[filter_list]
    new_df.to_csv('local-storage/filtered_data.csv',index = False)

if __name__ == "__main__":
    f = open('local-storage/record.json')
    data = json.load(f)
    make_df(data)