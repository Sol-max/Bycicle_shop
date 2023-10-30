"""empty message

Revision ID: 7fede93de09d
Revises: 525fb1539a02
Create Date: 2023-10-30 22:18:51.049326

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7fede93de09d'
down_revision = '525fb1539a02'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('order', schema=None) as batch_op:
        batch_op.add_column(sa.Column('order_id', sa.Integer(), nullable=True))
        batch_op.drop_column('price_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('order', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price_id', sa.VARCHAR(length=100), autoincrement=False, nullable=True))
        batch_op.drop_column('order_id')

    # ### end Alembic commands ###
