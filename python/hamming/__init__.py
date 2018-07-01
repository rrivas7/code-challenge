# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(first_dna_strand, second_dna_strand):
    if len(first_dna_strand) != len(second_dna_strand):
        raise ValueError('DNA strands must be of equal length.')

    number_of_mutations = 0
    for index, char in enumerate(first_dna_strand):
        if char != second_dna_strand[index]:
            number_of_mutations += 1

    return number_of_mutations
